import Kitchen from "./Kitchen"
import LivingRoom from './LivingRoom';
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    <>
      <h1>This is a floorplan.</h1>
      <Kitchen />
      <LivingRoom/>
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <Bath size={'Half'}/>
      <Bath size={'Full'}/>
    </>
  )
}

export default FloorPlan