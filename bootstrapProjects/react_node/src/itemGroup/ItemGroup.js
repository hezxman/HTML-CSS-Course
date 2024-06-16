import './itemgroup.css';
import Item1 from './item1/Item1';
import Item2 from './item2/Item2';
import Item3 from './item3/Item3';
import Item4 from './item4/Item4';
import Item5 from './item5/Item5';

function ItemGroup() {
  return (
    <div className='itemGroup'>
        <Item1/>
        <Item2/>
        <Item3/>
        <Item4/>
        <Item5/>
    </div>
  )
}

export default ItemGroup;