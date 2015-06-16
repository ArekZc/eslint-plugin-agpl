/**
 * @fileoverview Tests for valid-license rule.
 * @author Arek Zając
 * @copyright 2015 Arek Zając
 */
'use strict';

// -------------------------------------------
// Requirements
// -------------------------------------------

var eslint = require('eslint').linter,
  EsLintTester = require('eslint-tester');

// -------------------------------------------
// Tests
// -------------------------------------------

var ERROR_MESSAGE = 'License statement missing';
var eslintTester = new EsLintTester(eslint);

eslintTester.addRuleTest('lib/rules/valid-license', {

  valid: [
    {
      code: '/**\n' +
        ' * Copyright (C) Arek Zajac\n' +
        ' *\n' +
        ' * This program is free software: you can redistribute it and/or modify it under\n' +
        ' * the terms of the GNU Affero General Public License as published by the Free\n' +
        ' * Software Foundation, either version 3 of the License, or (at your option) any\n' +
        ' * later version\n' +
        ' *\n' +
        ' * This program is distrubuted in the hope that it will be useful,\n' +
        ' * but WITHOUT ANY WARRANTY; without even the implied warranty of\n' +
        ' * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n' +
        ' * GNU Affero General Public License for more details.\n' +
        ' *\n' +
        ' * You should have received a copy of the GNU Affero General Public License\n' +
        ' * along with this program. If not, see <http://www.gnu.org/licenses/>.\n' +
        ' */\n',
      args: [1, "Arek Zajac"]
    }
  ],

  invalid: [
    {
      code: 'function doSomething(e) { var f = e; }',
      args: [1, "Arek Zajac"],
      errors: [{message: ERROR_MESSAGE, type: 'Program'}]
    }
  ]

});
