export = ParentPackageJson;

declare function ParentPackageJson(startPath: string | null, ignore: number): ParentPackageJson.ParentPackage | boolean;
declare function ParentPackageJson(startPath: string): ParentPackageJson.ParentPackage | boolean;
declare function ParentPackageJson(): ParentPackageJson.ParentPackage | boolean;

declare namespace ParentPackageJson {
	export interface ParentPackage {
		read(): string;
		path: string;
		parse(): {[key: string]: any};
	}
}
