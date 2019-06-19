import { ReactComponent as ArmatureIcon } from './img/icons/armature.svg';
import { ReactComponent as CornerIcon } from './img/icons/corner.svg';
import { ReactComponent as PipeProfIcon } from './img/icons/pipeProf.svg';
import { ReactComponent as PipeCircleIcon } from './img/icons/pipeCircle.svg';
import { ReactComponent as CircleIcon } from './img/icons/circle.svg';
import { ReactComponent as SquareIcon } from './img/icons/square.svg';
import { ReactComponent as RibbonIcon } from './img/icons/ribbon.svg';
import { ReactComponent as ListIcon } from './img/icons/list.svg';
import { ReactComponent as Balk2Icon } from './img/icons/balk2.svg'
import { ReactComponent as BalkIcon } from './img/icons/balk.svg';
import { ReactComponent as ChannelIcon } from './img/icons/channel.svg'

import { ReactComponent as Armature } from './img/incisions/reinforcement.svg';
import { ReactComponent as Corner } from './img/incisions/corner-b.svg';
import { ReactComponent as PipeProf } from './img/incisions/pipe-b.svg';
import { ReactComponent as PipeCircle } from './img/incisions/pipe.svg';
import { ReactComponent as Circle } from './img/incisions/round.svg';
import { ReactComponent as Square } from './img/incisions/square.svg';
import { ReactComponent as Ribbon } from './img/incisions/strip.svg';
import { ReactComponent as List } from './img/incisions/sheet.svg';
import { ReactComponent as Balk2 } from './img/incisions/beam-h.svg';
import { ReactComponent as Balk } from './img/incisions/tavr.svg';
import { ReactComponent as Channel } from './img/incisions/channel-b.svg'

export const steelTypes = [
  {
    titleProduct: 'detail.armature.titleProduct',
    type: 'armature',
    img: ArmatureIcon,
    urlImg: Armature,
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
    img: CornerIcon,
    urlImg: Corner,
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
    img: PipeProfIcon,
    urlImg: PipeProf,
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
    img: PipeCircleIcon,
    urlImg: PipeCircle,
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
    img: CircleIcon,
    urlImg: Circle,
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
    img: SquareIcon,
    urlImg: Square,
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
    img: RibbonIcon,
    urlImg: Ribbon,
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
    img: ListIcon,
    urlImg: List,
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
    img: Balk2Icon,
    urlImg: Balk2,
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
    img: BalkIcon,
    urlImg: Balk,
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
    img: ChannelIcon,
    urlImg: Channel,
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
