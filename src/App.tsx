import React, { useState } from 'react';
import { TreeNode } from './treeNode';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { textChangeRangeIsUnchanged } from 'typescript';


function App() {
  return <div>
    <TreeNode/>
  </div>
}

export default App;
