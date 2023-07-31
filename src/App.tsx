// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";
// import ExpandableText from "./components/ExpandableText";

import Form from "./components/Form";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <Form></Form>

      {/* <Like onClick={() => console.log("Clicked")} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My app</Button> */}
    </div>
  );
}
export default App;
