type TChangelogEntry = {
	timestamp: string;
	component: string;
};

type TGroupedChangeLog = {
	component: string;
	start: string;
	end: string;
};

const addTenMinutes = (date: string): string => {
	const d = new Date(date);
	d.setMinutes(d.getMinutes() + 10);
	return d.toISOString();
};

export const groupChangelog = (
	edits: TChangelogEntry[],
): TGroupedChangeLog[] => {
	const grouped: TGroupedChangeLog[] = [];
	edits.sort(
		(a, b) =>
			a.component.localeCompare(b.component) ||
			a.timestamp.localeCompare(b.timestamp),
	);
	let group: undefined | TGroupedChangeLog = undefined;
	for (const edit of edits) {
		if (
			group === undefined ||
			edit.component !== group.component ||
			edit.timestamp > addTenMinutes(group.start)
		) {
			group = {
				component: edit.component,
				start: edit.timestamp,
				end: edit.timestamp,
			};
			grouped.push(group);
		} else {
			group.end = edit.timestamp;
		}
	}
	return grouped;
};
