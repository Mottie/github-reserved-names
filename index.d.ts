// Type definitions for github-reserved-names 1.1.7
// Project: https://github.com/Mottie/github-reserved-names
// Definitions by: Kid <https://github.com/kidonng>

type Oddball = {
	reserved: boolean;
	taken: boolean;
	typical: boolean;
	included: boolean;
	redirect?: string;
};

declare const reservedNames: {
	all: string[];
	check(name: string): boolean;
	oddballs(): string[];
	oddballs(name: string): Oddball | string[];
};

export = reservedNames;
