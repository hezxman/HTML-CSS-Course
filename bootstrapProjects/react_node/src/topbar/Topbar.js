import './topbar.css';
import ItemGroup from '../itemGroup/ItemGroup';

function Topbar() {
  return (
    <div className='topbar'>
        <h4 className='paul'>
            Paul's Online Notes
        </h4>
        <ItemGroup />
    </div>
  )
}

export default Topbar;