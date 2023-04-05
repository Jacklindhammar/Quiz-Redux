// add, update, delete
import Add from "./Add"
import Update from "./Update"
import Delete from "./Delete"

export default function Admin() {

  return (
    <div className="flex center-h wrap">
      <Add></Add>
      <Update></Update>
      <Delete></Delete>
    </div>
  )
}