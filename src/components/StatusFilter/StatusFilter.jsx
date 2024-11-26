import Button from '../Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';

export default function StatusFilter() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };
  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange('all')}>
        All {filter === 'is active'}
      </Button>
      <Button onClick={() => handleFilterChange('active')}>
        Active {filter === 'is active'}
      </Button>
      <Button onClick={() => handleFilterChange('completed')}>
        Completed {filter === 'is active'}
      </Button>
    </div>
  );
}
