import Kitchen from "./Kitchen"
import LivingRoom from './LivingRoom';

function FloorPlan() {
  return (
    <>
      <h1>This is a floorplan.</h1>
      <Kitchen />
      <LivingRoom/>
      <h2>Bedroom</h2>
      <h2>Bath</h2>
    </>
  )
}

export default FloorPlan