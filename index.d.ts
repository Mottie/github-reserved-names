// Type definitions for github-reserved-names 1.1.7
// Project: https://github.com/Mottie/github-reserved-names
// Definitions by: Kid <https://github.com/kidonng>

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/consistent-type-definitions -- TODO: In the next major release
interface oddball {
	reserved: boolean;
	taken: boolean;
	typical: boolean;
	included: boolean;
	redirect?: string;
}

declare const reservedNames: {
	all: string[];
	check(name: string): boolean;
	oddballs(): string[];
	oddballs(name: string): oddball | string[];
};

export = reservedNames;
