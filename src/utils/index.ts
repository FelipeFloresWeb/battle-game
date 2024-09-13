export const numeric = (value: string | number = 0, decimals: number = 0): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		maximumFractionDigits: decimals,
		minimumFractionDigits: decimals,
	})
	return formatter.format(value as number)
}

export const shortNumer = (value: string | number = 0, decimals: number = 0): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		maximumFractionDigits: decimals,

		notation: 'compact',
	})
	return formatter.format(value as number)
}
