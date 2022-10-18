import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export default function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </>
  );
}