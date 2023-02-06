import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
	selectCenario,
	selectLoadingScene,
	selectMonsterInterval,
	selectShowMonsterLoot,
	selectStage,
	selectStartMonsterAttack,
} from '../../store/selectors/actions'

const useActions = () => {
	const startMonsterAttack = useSelector((state: RootState) => selectStartMonsterAttack(state))
	const showMonsterLoot = useSelector((state: RootState) => selectShowMonsterLoot(state))
	const loadingScene = useSelector((state: RootState) => selectLoadingScene(state))
	const scene = useSelector((state: RootState) => selectCenario(state))
	const stage = useSelector((state: RootState) => selectStage(state))
	const fetchMonsterInterval = useSelector((state: RootState) => selectMonsterInterval(state))

	return {
		startMonsterAttack,
		showMonsterLoot,
		loadingScene,
		scene,
		stage,
		fetchMonsterInterval,
	}
}

export default useActions
