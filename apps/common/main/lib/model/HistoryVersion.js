/*
 *
 * (c) Copyright Ascensio System Limited 2010-2016
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
/**
 * User: Julia.Radzhabova
 * Date: 05.03.15
 * Time: 16:42
 */

if (Common === undefined)
    var Common = {};

Common.Models = Common.Models || {};

define([
    'underscore',
    'backbone',
    'common/main/lib/component/BaseView'
], function(_, Backbone){
    'use strict';

    Common.Models.HistoryVersion = Backbone.Model.extend({
        defaults: function() {
            return {
                version : 0,
                revision: 0,
                changeid : undefined,
                userid  : undefined,
                username: 'Guest',
                usercolor: '#ff0000',
                created : undefined,
                id      : Common.UI.getId(),        //  internal
                url    : '',
                urlDiff : '',
                urlGetTime : '',
                docId: '',
                docIdPrev: '',
                arrColors: [], // array of user colors for all changes of current version
                markedAsVersion: false,
                canRestore: false,
                isRevision: true
            }
        }
    });
});
