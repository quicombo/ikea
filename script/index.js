'use strict';
import { openMenu } from './catalog.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import { loadData } from './loadData.js';
generateCatalog();
generateSubCatalog();
generateHeader();
generateFooter()

openMenu();
loadData();