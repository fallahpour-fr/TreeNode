import { TreeNode } from "./TreeNodeComponent";
import { ViewTreeNode } from "./ViewTreeNodeComponent";

import { Route, BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return <Router>
    <Route exact path="/">
      <TreeNode />
    </Route>
    <Route path="/view/treenode" >
      <ViewTreeNode />
    </Route>
  </Router>
}

export default App;
