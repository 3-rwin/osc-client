import React, { useContext} from 'react'
import Button from './Button'
import NewButton from './NewButton'
import DataContext from '../context/DataContext';

const Feed = ({ buttons }) => {
  const { settings } = useContext(DataContext);
  return (
    <div className='buttonFeed'>
        {buttons.map(button => (
          <Button key={button.id} button={button} />
        ))}
        {console.log(settings)}
        {settings ? <NewButton /> : null}
    </div>
  )
}

export default Feed