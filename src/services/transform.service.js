export class TransformService {
	constructor() {}

	static fbObjectToArray(fbData) {
		return Object.keys(fbData).map(key => {
			const item = fbData[key]
			item.id = key

			return item
		})
	}
}
