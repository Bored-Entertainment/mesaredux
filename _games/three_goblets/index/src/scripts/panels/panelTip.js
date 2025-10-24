'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['game', 'panelBase'], function (game, PanelBase) {
  //*******************************************************************************************************************
  // ** Panel for displaying Tips
  //*******************************************************************************************************************
  var PanelTip = function (_PanelBase) {
    _inherits(PanelTip, _PanelBase);

    function PanelTip(position, active) {
      _classCallCheck(this, PanelTip);

      return _possibleConstructorReturn(this, (PanelTip.__proto__ || Object.getPrototypeOf(PanelTip)).call(this, position, active));
    }

    _createClass(PanelTip, [{
      key: 'initialize',
      value: function initialize() {
        _get(PanelTip.prototype.__proto__ || Object.getPrototypeOf(PanelTip.prototype), 'initialize', this).call(this);
        this.tip = null;
        this.prevActive = null;
      }
    }, {
      key: 'setupElements',
      value: function setupElements() {
        this.labels.title = { x: 79, y: 1, a: 0.5 };
        this.labels.tip = { x: 4, y: 13
          //this.labels.close = {x:79, y:4, a:0.5}
        };
      }
      //*******************************************************************************************************************
      // * Setter
      //*******************************************************************************************************************

    }, {
      key: 'setTip',
      value: function setTip(tip, prevActive) {
        this.tip = tip;
        this.prevActive = prevActive;
        this.move(tip.position);
      }
      //*******************************************************************************************************************
      // * Other
      //*******************************************************************************************************************

    }, {
      key: 'titleLabelText',
      value: function titleLabelText() {
        return 'Tip';
      }
    }, {
      key: 'tipLabelText',
      value: function tipLabelText() {
        return this.tip ? this.tip.text : '';
      }
    }, {
      key: 'closeLabelText',
      value: function closeLabelText() {
        return 'Click to close.';
      }
    }, {
      key: 'move',
      value: function move(position) {
        var direction = 0;
        if (this.position != position) {
          direction = position == 'bot' ? 1 : -1;
        }
        Object.values(this.sprites).concat([this.bgSprite]).forEach(function (s) {
          return s.y += 72 * direction;
        });
        this.position = position;
      }
    }]);

    return PanelTip;
  }(PanelBase);

  return PanelTip;
});