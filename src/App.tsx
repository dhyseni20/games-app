// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        suscipit eius nemo iusto, explicabo voluptates vitae quam tempore
        repudiandae! Vitae, quas. Suscipit aliquam earum eaque, impedit
        perspiciatis molestias veniam aliquid tempore excepturi, officiis optio
        quaerat voluptatibus doloribus ipsum ipsam ullam delectus quo velit enim
        temporibus animi placeat voluptatum quidem reprehenderit. Deserunt amet,
        magni facere delectus odit sunt adipisci excepturi labore alias? Labore
        ratione reiciendis id quod repudiandae hic ab! Vitae ut dolorem impedit
        eius nulla voluptas fuga et sapiente aperiam dolore, illum hic sed quos
        in placeat, nemo dignissimos alias non voluptate ratione aliquam,
        ducimus dicta. Quis quas corrupti non!
      </ExpandableText>
      {/* <Like onClick={() => console.log("Clicked")} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My app</Button> */}
    </div>
  );
}
export default App;
