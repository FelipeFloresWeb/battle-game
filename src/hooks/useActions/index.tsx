import { useSelector } from 'react-redux'
import { IActionsState } from '../../store/reducers/types'
import { selectShowMonsterLoot, selectStartMonsterAttack } from '../../store/selectors/actions'

const useActions = () => {
	const startMonsterAttack = useSelector((state: IActionsState) => selectStartMonsterAttack(state))
	const showMonsterLoot = useSelector((state: IActionsState) => selectShowMonsterLoot(state))

	return {
		startMonsterAttack,
		showMonsterLoot,
	}
}

export default useActions
