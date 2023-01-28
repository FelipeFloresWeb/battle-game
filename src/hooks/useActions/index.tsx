import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
	selectCenario,
	selectLoadingScene,
	selectShowMonsterLoot,
	selectStartMonsterAttack,
} from '../../store/selectors/actions'

const useActions = () => {
	const startMonsterAttack = useSelector((state: RootState) => selectStartMonsterAttack(state))
	const showMonsterLoot = useSelector((state: RootState) => selectShowMonsterLoot(state))
	const loadingScene = useSelector((state: RootState) => selectLoadingScene(state))
	const scene = useSelector((state: RootState) => selectCenario(state))

	return {
		startMonsterAttack,
		showMonsterLoot,
		loadingScene,
		scene,
	}
}

export default useActions
