import Kitchen from "./Kitchen"
import LivingRoom from './LivingRoom';
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    <>
      <Bedroom bedNum={'Guest'}/>
      <Bath size={'Full'}/>
      <LivingRoom/>
      <Bedroom bedNum={3}/>
      <Kitchen />
      <Bedroom bedNum={2}/>
      <Bath size={'Half'}/>
      <Bedroom bedNum={1}/>
      <Bath size={'Full'}/>
    </>
  )
}

export default FloorPlan