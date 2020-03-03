function slugify(str) {
	// https://lucidar.me/en/web-dev/how-to-slugify-a-string-in-javascript/
	str = str.replace(/^\s+|\s+$/g, '');
	str = str.toLowerCase();
	// Remove accents, swap ñ for n, etc
	let from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
	let to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}
	str = str.replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
	.replace(/\s+/g, '-') // Collapse whitespace and replace by -
	.replace(/-+/g, '-'); // Collapse dashes
	return str;
}

function addFilter() { // Build the timeline filter and add it to the page
	const tlNodes = document.getElementsByClassName('tl-node'); // timeline nodes
	if (tlNodes.length > 1) {
		let filterable = false;
		const filterTypes = {};
		for (let i = 0; i < tlNodes[0].attributes.length; i++) {
			const attr = tlNodes[0].attributes[i].name;
			if (attr.slice(0,4) == 'data') {
				filterTypes[attr.slice(5,attr.length)] = {};
			}
		}
		for (let i = 0; i < tlNodes.length; i++) {
			for (filterType in filterTypes) {
				const filterSubType = tlNodes[i].dataset[filterType];
				if (filterSubType in filterTypes[filterType] == false) {
					filterTypes[filterType][filterSubType] = {};
					filterTypes[filterType][filterSubType].amount = 1;
					filterTypes[filterType][filterSubType].active = false;
				} else {
					filterTypes[filterType][filterSubType].amount++;
				}
				if (Object.keys(filterTypes[filterType]).length > 1) {
					filterable = true;
				}
			}
		}
		if (filterable) {
			const filterForm = document.createElement('form');
			filterForm.setAttribute('id', 'timeline-filter');
			filterForm.setAttribute('hidden', '');
			const filterHead = document.createElement('h3');
			filterHead.innerHTML = 'Timeline filters';
			filterForm.appendChild(filterHead);
			function filterButton(placement) { // Create a "Show/hide filters" button
				const showFilters = document.createElement('button');
				showFilters.setAttribute('class', 'show-hide-filters')
				function checkState(thisButton) {
					if (filterForm.hasAttribute('hidden')) {
						thisButton.innerHTML = 'Show filters';
					} else {
						thisButton.innerHTML = 'Hide filters';
					}
				}
				checkState(showFilters);
				showFilters.addEventListener('click', function() {
					if (filterForm.hasAttribute('hidden')) {
						filterForm.removeAttribute('hidden');
						showFilters.innerHTML = 'Hide filters';
					} else {
						filterForm.setAttribute('hidden', '');
						showFilters.innerHTML = 'Show filters';
					}
					const allButtons = document.getElementsByClassName('show-hide-filters');
					for (let i = 0; i < allButtons.length; i++) {
						checkState(allButtons[i]);
					}
					event.preventDefault();
				});
				placement.appendChild(showFilters);
			}
			filterButton(filterHead);
			const clearFilters = document.createElement('button');
			clearFilters.setAttribute('class', 'clear-filters');
			clearFilters.setAttribute('disabled', '');
			clearFilters.innerHTML = 'Clear filters';
			clearFilters.addEventListener('click', function() {
				if (clearFilters.hasAttribute('disabled') == false) {
					clearFilters.setAttribute('disabled', '');
					filter('all');
				}
				event.preventDefault();
			});
			filterForm.appendChild(clearFilters);
			for (filterType in filterTypes) {
				const filterFieldset = document.createElement('fieldset');
				filterFieldset.setAttribute('class', 'filter-type');
				filterFieldset.setAttribute('id', 'filter-' + slugify(filterType));
				const filterLegend = document.createElement('legend');
				filterLegend.innerHTML = 'Filter by ' + filterType;
				const filterSubTypes = Object.keys(filterTypes[filterType]);
				filterSubTypes.sort();
				for (filterSubType in filterSubTypes) {
					filterSubType = filterSubTypes[filterSubType];
					const filterDiv = document.createElement('div');
					const filterInput = document.createElement('input');
					filterInput.setAttribute('data-type', filterType);
					filterInput.setAttribute('data-subtype', filterSubType);
					filterInput.setAttribute('class', 'filter-subtype');
					filterInput.setAttribute('id', 'filter-' + filterType + '-' + slugify(filterSubType));
					filterInput.setAttribute('type', 'checkbox');
					filterInput.addEventListener('click', function() {
						thisFilterType = filterInput.dataset.type;
						thisFilterSubType = filterInput.dataset.subtype;
						if (filterInput.checked) {
							filterTypes[thisFilterType][thisFilterSubType].active = true;
						} else {
							filterTypes[thisFilterType][thisFilterSubType].active = false;
						}
						filter();
					});
					const filterLabel = document.createElement('label');
					filterLabel.setAttribute('for', 'filter-' + filterType + '-' + slugify(filterSubType));
					filterLabel.innerHTML = filterSubType + ' (' + filterTypes[filterType][filterSubType].amount + ')';
					filterDiv.appendChild(filterInput);
					filterDiv.appendChild(filterLabel);
					filterFieldset.appendChild(filterDiv);
				}
				filterFieldset.appendChild(filterLegend);
				filterForm.appendChild(filterFieldset);
			}
			const filterAlert = document.createElement('p');
			const filterAlertAll = 'Showing all posts';
			filterAlert.setAttribute('class', 'filter-alert');
			filterAlert.innerHTML = filterAlertAll;
			filterButton(filterAlert);
			document.getElementById('timeline-wrap').insertBefore(filterForm, document.getElementById('timeline'));
			document.getElementById('timeline-wrap').insertBefore(filterAlert, document.getElementById('timeline'));
			function filter(type) {
				function showAll() {
					filterAlert.innerHTML = filterAlertAll;
					filterButton(filterAlert);
					clearFilters.setAttribute('disabled', '');
					const filterInputs = document.getElementsByClassName('filter-subtype');
					for (let i = 0; i < filterInputs.length; i++) {
						const thisInput = filterInputs[i];
						filterInputs[i].checked = false;
						filterTypes[thisInput.dataset.type][thisInput.dataset.subtype].active = false;
					}
					for (let i = 0; i < tlNodes.length; i++) {
						tlNodes[i].removeAttribute('hidden');
						tlNodes[i].removeAttribute('aria-hidden');
					}
				}
				if (type == 'all') {
					showAll();
				} else {
					const activeFilters = {};
					for (filterType in filterTypes) {
						for (filterSubType in filterTypes[filterType]) {
							if (filterTypes[filterType][filterSubType].active) {
								if (activeFilters[filterType] == undefined) {
									activeFilters[filterType] = [];
								}
								activeFilters[filterType].push(filterSubType);
								activeFilters[filterType].sort();
							}
						}
					}
					if (Object.keys(activeFilters).length == 0) {
						showAll();
					} else {
						let activeFilterString = 'Filtered by ';
						for (filterType in activeFilters) {
							for (let i = 0; i < activeFilters[filterType].length; i++) {
								activeFilterString += '<span class="active-filter">' + activeFilters[filterType][i] + '</span>' + ', ';
							}
						}
						activeFilterString = activeFilterString.slice(0,-2);
						clearFilters.removeAttribute('disabled');
						for (let i = 0; i < tlNodes.length; i++) {
							const filterTypeStatus = [];
							for (filterType in filterTypes) {
								let nodeSubTypeActive = false;
								let otherSubTypeActive = false;
								for (filterSubType in filterTypes[filterType]) {
									if (filterTypes[filterType][filterSubType].active) { // if the current filter subtype is active
										if (tlNodes[i].dataset[filterType] == filterSubType) { // and it matches the current timeline node's subtype
											nodeSubTypeActive = true; // the current node's subtype is active
										} else {
											otherSubTypeActive = true; // another subtype is active
										}
									}
								}
								if (nodeSubTypeActive == true || otherSubTypeActive == false) { // if the current node's subtype is active or no subtypes are active
									filterTypeStatus.push(true); // the current filter type doesn't disqualify the current timeline node
								} else {
									filterTypeStatus.push(false); // the current filter type disqualifies the current timeline node
								}
							}
							if (filterTypeStatus.includes(false)) {
								tlNodes[i].setAttribute('hidden', '');
								tlNodes[i].setAttribute('aria-hidden', 'true');
							} else {
								tlNodes[i].removeAttribute('hidden', '');
								tlNodes[i].removeAttribute('aria-hidden', '');
							}
						}
						filterAlert.innerHTML = activeFilterString;
						filterButton(filterAlert);
					}
				}
			}
		}
	}
}