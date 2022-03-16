import React, { useState } from 'react';
import { TreeNode } from './treeNode';
import { TreeView } from './treeView';
import {DynamicField} from './saveFormData';
import { Tree } from './Tree';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { textChangeRangeIsUnchanged } from 'typescript';


function App() {
  return <div>
    <TreeNode/>
  </div>
}

export default App;
