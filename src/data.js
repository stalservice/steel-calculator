import armatureIcon from './svg/armature.svg';
import cornerIcon from './svg/corner.svg';
import pipeProfIcon from './svg/pipeProf.svg';
import pipeCircleIcon from './svg/pipeCircle.svg';
import circleIcon from './svg/circle.svg';
import squareIcon from './svg/square.svg';
import ribbonIcon from './svg/ribbon.svg';
import listIcon from './svg/list.svg';
import balk2Icon from './svg/balk2.svg'
import balkIcon from './svg/balk.svg';
import сhannelIcon from './svg/сhannel.svg'

import armature from './img/reinforcement.svg';
import corner from './img/corner-b.svg';
import pipeProf from './img/pipe-b.svg';
import pipeCircle from './img/pipe.svg';
import circle from './img/round.svg';
import square from './img/square.svg';
import ribbon from './img/strip.svg';
import list from './img/sheet.svg';
import balk2 from './img/beam-h.svg';
import balk from './img/tavr.svg';
import сhannel from './img/channel-b.svg'

export const steelTypes = [
  {
    titleProduct: 'detail.armature.titleProduct',
    type: 'armature',
    img: armatureIcon,
    urlImg: armature,
    parameters: {
      d: {
        title: 'detail.common.titleDiameter',
        value: '',
        min: 0,
        max: 36
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {d, l} = this.parameters;
      return (((+d.value * +d.value * Math.PI/4 * +density) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.corner.titleProduct',
    type: 'corner',
    img: cornerIcon,
    urlImg: corner,
    parameters: {
      b: {
        title: 'detail.common.titleHeightShelfB',
        value: '',
        min: 0,
        max: 500
      },
      a: {
        title: 'detail.common.titleHeightShelfA',
        value: '',
        min: 0,
        max: 500
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 100
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {b, a, s, l} = this.parameters;
      return ((density * +s.value * (+b.value + +a.value - +s.value) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.pipeProf.titleProduct',
    type: 'pipeProf',
    img: pipeProfIcon,
    urlImg: pipeProf,
    parameters: {
      b: {
        title: 'detail.pipeProf.titleB',
        value: '',
        min: 0,
        max: 1000
      },
      a: {
        title: 'detail.pipeProf.titleA',
        value: '',
        min: 0,
        max: 1000
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 100
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {b, a, s, l} = this.parameters;
      return ((density/7850 * 0.0157 * +s.value * (+b.value + +a.value - 2.86 * +s.value) * +l.value) * 1000)
    }
  },
  {
    titleProduct: 'detail.pipeCircle.titleProduct',
    type: 'pipeCircle',
    img: pipeCircleIcon,
    urlImg: pipeCircle,
    parameters: {
      d: {
        title: 'detail.common.titleDiameter',
        value: '',
        min: 0,
        max: 1000
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 300
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {d, s, l} = this.parameters;
      return (((Math.PI * (+d.value - +s.value) * +s.value * density) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.circle.titleProduct',
    type: 'circle',
    img: circleIcon,
    urlImg: circle,
    parameters: {
      d: {
        title: 'detail.common.titleDiameter',
        value: '',
        min: 0,
        max: 1000
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {d, l} = this.parameters;
      return (((density * Math.PI * +d.value * +d.value /4000) * +l.value))
    }
  },
  {
    titleProduct: 'detail.square.titleProduct',
    type: 'square',
    img: squareIcon,
    urlImg: square,
    parameters: {
      a: {
        title: 'detail.square.titleA',
        value: '',
        min: 0,
        max: 1000
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {a, l} = this.parameters;
      return (((density * +a.value * +a.value) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.ribbon.titleProduct',
    type: 'ribbon',
    img: ribbonIcon,
    urlImg: ribbon,
    parameters: {
      a: {
        title: 'detail.ribbon.titleA',
        value: '',
        min: 0,
        max: 100
      },
      b: {
        title: 'detail.ribbon.titleB',
        value: '',
        min: 0,
        max: 1000
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {a, b, l} = this.parameters;

      return (((density * +a.value * +b.value) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.list.titleProduct',
    type: 'list',
    img: listIcon,
    urlImg: list,
    parameters: {
      s: {
        title: 'detail.list.titleS',
        value: '',
        min: 0,
        max: 100
      },
      a: {
        title: 'detail.list.titleA',
        value: '',
        min: 0,
        max: 3000
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const {s, a, l} = this.parameters;
      return (((density * +s.value * +a.value) * +l.value) / 1000)
    }
  },
  {
    titleProduct: 'detail.balk2.titleProduct',
    type: 'balk2',
    img: balk2Icon,
    urlImg: balk2,
    parameters: {
      h: {
        title: 'detail.common.titleHeightBeamH',
        value: '',
        min: 0,
        max: 1000
      },
      b: {
        title: 'detail.common.titleWidthShelfB',
        value: '',
        min: 0,
        max: 500
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 200
      },
      t: {
        title: 'detail.common.titleThicknessShelfT',
        value: '',
        min: 0,
        max: 200
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const { h, b, s, t, l} = this.parameters;
      return (
        (density * (+b.value * 2 * +t.value  + +s.value * (+h.value - 2 * +t.value)) * +l.value) / 1000
      )
    }
  },
  {
    titleProduct: 'detail.balk.titleProduct',
    type: 'balk',
    img: balkIcon,
    urlImg: balk,
    parameters: {
      h: {
        title: 'detail.common.titleHeightBeamH',
        value: '',
        min: 0,
        max: 1000
      },
      b: {
        title: 'detail.common.titleWidthShelfB',
        value: '',
        min: 0,
        max: 500
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 200
      },
      t: {
        title: 'detail.common.titleThicknessShelfT',
        value: '',
        min: 0,
        max: 200
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const { h, b, s, t, l} = this.parameters;
      return (
        (density * (+b.value * +t.value  + +s.value * (+h.value - +t.value)) * +l.value) / 1000
      )
    }
  },
  {
    titleProduct: 'detail.сhannel.titleProduct',
    type: 'сhannel',
    img: сhannelIcon,
    urlImg: сhannel,
    parameters: {
      h: {
        title: 'detail.сhannel.titleH',
        value: '',
        min: 0,
        max: 1000
      },
      b: {
        title: 'detail.common.titleWidthShelfB',
        value: '',
        min: 0,
        max: 500
      },
      a: {
        title: 'detail.common.titleWidthShelfA',
        value: '',
        min: 0,
        max: 500
      },
      s: {
        title: 'detail.common.titleWallS',
        value: '',
        min: 0,
        max: 200
      },
      t: {
        title: 'detail.common.titleThicknessShelfT',
        value: '',
        min: 0,
        max: 200
      },
      l: {
        title: 'detail.common.titleLength',
        value: '',
        min: 0,
        max: 10000
      }
    },
    result(density = 0) {
      const { h, b, a, s, t, l} = this.parameters;
      return (
        (density * (((+b.value + +a.value + +h.value - 2 * +t.value) * +s.value) * +l.value)) / 1000
      )
    }
  },
];

export const metal = [
  {
    id: 1,
    type: 'detail.metal.type1',
    marka: [],
    density: 7850
  },
  {
    id: 2,
    type: 'detail.metal.type2',
    marka: [],
    density: 7900
  },
  {
    id: 3,
    type: 'detail.metal.type3',
    marka: [],
    density: 7960
  },
  {
    id: 4,
    type: 'detail.metal.type4',
    marka: [],
    density: 7700
  },
  {
    id: 5,
    type: 'detail.metal.type5',
    marka: [],
    density: 7950
  },
  {
    id: 6,
    type: 'detail.metal.type6',
    marka: [],
    density: 8100
  },
  {
    id: 7,
    type: 'detail.metal.type7',
    marka: [],
    density: 7600
  },
  {
    id: 8,
    type: 'detail.metal.type8',
    marka: [],
    density: 8000
  },
  {
    id: 9,
    type: 'detail.metal.type9',
    marka: [],
    density: 2850
  },
  {
    id: 10,
    type: 'detail.metal.type10',
    marka: [],
    density: 4540
  },
  {
    id: 11,
    type: 'detail.metal.type11',
    marka: [],
    density: 8960
  },
  {
    id: 12,
    type: 'detail.metal.type12',
    marka: [],
    density: 8600
  },
  {
    id: 13,
    type: 'detail.metal.type13',
    marka: [],
    density: 11340
  },
  {
    id: 14,
    type: 'detail.metal.type14',
    marka: [],
    density: 19300
  },
];