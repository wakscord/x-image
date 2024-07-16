import gosegu from "./assets/고세구.svg";
import lilpa from "./assets/릴파.svg";
import viichan from "./assets/비챤.svg";
import ine from "./assets/아이네.svg";
import woowakgood from "./assets/우왁굳.svg";
import jururu from "./assets/주르르.svg";
import jingburger from "./assets/징버거.svg";

export const members = [
  "우왁굳",
  "아이네",
  "징버거",
  "릴파",
  "주르르",
  "고세구",
  "비챤",
] as const;

export const memberData = {
  우왁굳: {
    afreeca: "ecvhao",
    background: woowakgood,
  },
  아이네: {
    afreeca: "inehine",
    background: ine,
  },
  징버거: {
    afreeca: "jingburger1",
    background: jingburger,
  },
  릴파: {
    afreeca: "lilpa0309",
    background: lilpa,
  },
  주르르: {
    afreeca: "cotton1217",
    background: jururu,
  },
  고세구: {
    afreeca: "gosegu2",
    background: gosegu,
  },
  비챤: {
    afreeca: "viichan6",
    background: viichan,
  },
} as const;
