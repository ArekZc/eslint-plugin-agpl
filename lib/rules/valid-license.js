/**
 * @fileoverview Rule to check if file contains licence
 * @author Arek Zając
 * @copyright 2015 Arek Zając. All rights reserved.
 */

'use strict';

// -----------------------------------------------------
// Rule Definition
// -----------------------------------------------------

var ERROR_MESSAGE = 'License statement missing';

module.exports = function (context) {

  var LICENSE_COMMENT = ' * Copyright (C) ' + context.options[0] + '\n' +
      ' *\n' +
      ' * This program is free software: you can redistribute it and/or modify it under\n' +
      ' * the terms of the GNU Affero General Public License as published by the Free\n' +
      ' * Software Foundation, either version 3 of the License, or (at your option) any\n' +
      ' * later version.\n' +
      ' *\n' +
      ' * This program is distributed in the hope that it will be useful,\n' +
      ' * but WITHOUT ANY WARRANTY; without even the implied warranty of\n' +
      ' * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n' +
      ' * GNU Affero General Public License for more details.\n' +
      ' *\n' +
      ' * You should have received a copy of the GNU Affero General Public License\n' +
      ' * along with this program. If not, see <http://www.gnu.org/licenses/>.\n';

  function hasLicense(node) {

    var comments = context.getAllComments(node);

    if (comments.length === 0) {
      return false;
    }

    for (var comment in comments) {

      if (comments[comment].value.indexOf(LICENSE_COMMENT) > -1) {
        return true;
      }

    }

    return false;

  }

  return {
    Program: function (node) {

      if (!hasLicense(node)) {
        context.report(node, ERROR_MESSAGE);
      }


    }
  };

};
