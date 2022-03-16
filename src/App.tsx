import React, { useState } from 'react';
import { TreeNode } from './treeNode';
import { TreeView } from './treeView';
import {SaveData} from './saveFormData';
import { Tree } from './Tree';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { textChangeRangeIsUnchanged } from 'typescript';


function App() {
  return <div>
    <SaveData/>
  </div>
}

export default App;
