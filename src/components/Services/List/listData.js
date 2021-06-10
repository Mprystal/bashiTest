import { changeServicesLang } from '../ServicesLangChange';
import HumanitarianVisaImg from '../../../img/womanBlackWhite.jpg';
import AffirmativeAsylumImg from '../../../img/manTrainTracks.jpg';
import DACAImg from '../../../img/theDreamer.jpg';
import FamilyImmigrationImg from '../../../img/passports.jpg';
import CitizenshipImg from '../../../img/flagHeldHigh.jpg';
import DetentionImg from '../../../img/behindFence.jpg';
import EmploymentVisasImg from '../../../img/cropPickerUpper.jpg';
import NonImmigrantVisasImg from '../../../img/tabletInHand.jpg';
import RemovalImg from '../../../img/planeTakeOff.jpg';
import Traffic from '../../../img/trafficLight.jpg';

const {
  servicesTypeHumanitarian,
  servicesItemTps,
  servicesItemTvisa,
  servicesItemUvisa,
  servicesItemVawa,
  servicesItemDaca,
  servicesTypeAffirmative,
  servicesTypeDaca,
  servicesItemRenewal,
  servicesTypeFamilyImmigration,
  servicesItemPetitioning,
  servicesItemAdjustment,
  servicesItemConsular,
  servicesItemWaivers,
  servicesTypeCitizenshipNaturalization,
  servicesTypeDetentionBond,
  servicesItemCredibleFear,
  servicesTypeEmploymentVisa,
  servicesTypeNonImmigrantVisa,
  servicesItemVisitorVisa,
  servicesItemSpecialtyOccupationsVisa,
  servicesItemFiancéVisa,
  servicesTypeRemovalDefense,
  servicesItemCancellationRemoval,
  servicesItemAsylum,
  servicesItemStayRemoval,
  servicesItemVoluntaryDeparture,
  servicesTypeTraffic,
  servicesItemSpeeding,
  servicesItemOperatorsLicense,
  servicesItemOtherTraffic,
} = changeServicesLang;

export const listData = [
  {
    type: servicesTypeHumanitarian,
    items: [
      servicesItemTps,
      servicesItemTvisa,
      servicesItemUvisa,
      servicesItemVawa,
      servicesItemDaca,
    ],
    img: HumanitarianVisaImg,
    alpha: 0.3,
  },
  {
    type: servicesTypeAffirmative,
    items: [],
    img: AffirmativeAsylumImg,
    alpha: 0.3,
  },
  {
    type: servicesTypeDaca,
    items: [servicesItemRenewal],
    img: DACAImg,
    alpha: 0.8,
  },
  {
    type: servicesTypeFamilyImmigration,
    items: [
      servicesItemPetitioning,
      servicesItemAdjustment,
      servicesItemConsular,
      servicesItemWaivers,
    ],
    img: FamilyImmigrationImg,
    alpha: 0.7,
  },
  {
    type: servicesTypeCitizenshipNaturalization,
    items: [],
    img: CitizenshipImg,
    alpha: 0.3,
  },
  {
    type: servicesTypeDetentionBond,
    items: [servicesItemCredibleFear],
    img: DetentionImg,
    alpha: 0.5,
  },
  {
    type: servicesTypeEmploymentVisa,
    items: [],
    img: EmploymentVisasImg,
    alpha: 0.5,
  },
  {
    type: servicesTypeNonImmigrantVisa,
    items: [
      servicesItemVisitorVisa,
      servicesItemSpecialtyOccupationsVisa,
      servicesItemFiancéVisa,
    ],
    img: NonImmigrantVisasImg,
    alpha: 0.7,
  },
  {
    type: servicesTypeRemovalDefense,
    items: [
      servicesItemCancellationRemoval,
      servicesItemAsylum,
      servicesItemStayRemoval,
      servicesItemVoluntaryDeparture,
    ],
    img: RemovalImg,
    alpha: 0.6,
  },
  {
    type: servicesTypeTraffic,
    items: [
      servicesItemSpeeding,
      servicesItemOperatorsLicense,
      servicesItemOtherTraffic,
    ],
    img: Traffic,
    alpha: 0.6,
  },
];
