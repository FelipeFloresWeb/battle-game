import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import {
	selectDropMultiplier,
	selectExpLostRate,
	selectExpMultilplier,
	selectGoldLostRate,
} from '../../store/selectors/rates'

const useRates = () => {
	const expMultiplier = useSelector((state: RootState) => selectExpMultilplier(state))
	const dropMultiplier = useSelector((state: RootState) => selectDropMultiplier(state))
	const goldLostRate = useSelector((state: RootState) => selectGoldLostRate(state))
	const expLostRate = useSelector((state: RootState) => selectExpLostRate(state))

	return {
		expMultiplier,
		dropMultiplier,
		goldLostRate,
		expLostRate,
	}
}

export default useRates
