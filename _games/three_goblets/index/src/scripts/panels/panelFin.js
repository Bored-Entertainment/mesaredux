'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** The Forge Panel
  //*******************************************************************************************************************
  var PanelFin = function (_PanelBase) {
    _inherits(PanelFin, _PanelBase);

    function PanelFin(position, active) {
      _classCallCheck(this, PanelFin);

      return _possibleConstructorReturn(this, (PanelFin.__proto__ || Object.getPrototypeOf(PanelFin)).call(this, position, active));
    }

    _createClass(PanelFin, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelFin.prototype.__proto__ || Object.getPrototypeOf(PanelFin.prototype), 'initialize', this).call(this);
        this.showFirst = false;
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.labels.congrats = { x: 4, y: 2
          //this.labels.and = {x:79, y:24, a:0.5}
          //this.labels.thanks = {x:79, y:34, a:0.5}
        };
      }
      //*******************************************************************************************************************
      // * Refresh
      //*******************************************************************************************************************

    }, {
      key: 'refresh',
      value: function refresh() {
        _get(PanelFin.prototype.__proto__ || Object.getPrototypeOf(PanelFin.prototype), 'refresh', this).call(this);
        this.showFirst = !game.world.shownFin;
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'congratsLabelText',
      value: function congratsLabelText() {
        if (this.showFirst) {
          return 'Congratulations and thanks for\nplaying! If you wish to continue, you\ncan now use Keys to access new\nareas within the Magic Orb.\nYou have also unlocked a new page\nof skills.';
        } else {
          return '\n                 Once again,\n              Congratulations!\n                      and\n            Thanks for Playing!\n';
        }
      }
    }, {
      key: 'andLabelText',
      value: function andLabelText() {
        return 'and';
      }
    }, {
      key: 'thanksLabelText',
      value: function thanksLabelText() {
        return 'Thanks for playing!';
      }
    }]);

    return PanelFin;
  }(PanelBase);

  return PanelFin;
});