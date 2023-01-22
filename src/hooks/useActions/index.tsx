import { useSelector } from 'react-redux'
import { IActionsState } from '../../store/reducers/types'
import { selectShowMonsterLoot } from '../../store/selectors/actions'

const useActions = () => {
	const showMonsterLoot = useSelector((state: IActionsState) => selectShowMonsterLoot(state))

	return {
		showMonsterLoot,
	}
}

export default useActions
