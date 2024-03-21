export enum VisitIndicator {
  Male = "M - Male",
  Female = "F - Female",
  Jewish = "JEW - Jewish",
  Muslim = "MUS - Muslim",
  Mormon = "MOR - Mormon",
  Catholic = "CATH - Catholic",
  GaveBible = "GB - Gave Bible",
  LeftTract = "LT - Left Tract",
  NoResponse = "NR - No Response",
  NoSoliciting = "NS - No Soliciting",
  SharedGospel = "SG - Shared Gospel",
  LeftBrochure = "LB - Left Brochure",
  NotInterested = "NI - Not Interested",
  JehovahWitness = "JW - Jehovah Witness",
  SharedTestimony = "ST - Shared Testimony",
  UnwillingToTalk = "UTT - Unwilling To Talk",
  ProfessingBeliever = "PB - Professing Believer",
  RequestReturnVisit = "RRV - Request Return Visit",
  MemberOfAnotherChurch = "MAC - Member of another church",
}

export function getValueFromVisitIndicatorKey(key: string) {
  switch (key) {
    case "Male":
      return VisitIndicator.Male;
    case "Female":
      return VisitIndicator.Female;
    case "Jewish":
      return VisitIndicator.Jewish;
    case "Muslim":
      return VisitIndicator.Muslim;
    case "Mormon":
      return VisitIndicator.Mormon;
    case "Catholic":
      return VisitIndicator.Catholic;
    case "LeftTract":
      return VisitIndicator.LeftTract;
    case "GaveBible":
      return VisitIndicator.GaveBible;
    case "NoResponse":
      return VisitIndicator.NoResponse;
    case "LeftBrochure":
      return VisitIndicator.LeftBrochure;
    case "NoSoliciting":
      return VisitIndicator.NoSoliciting;
    case "SharedGospel":
      return VisitIndicator.SharedGospel;
    case "NotInterested":
      return VisitIndicator.NotInterested;
    case "JehovahWitness":
      return VisitIndicator.JehovahWitness;
    case "SharedTestimony":
      return VisitIndicator.SharedTestimony;
    case "UnwillingToTalk":
      return VisitIndicator.UnwillingToTalk;
    case "ProfessingBeliever":
      return VisitIndicator.ProfessingBeliever;
    case "RequestReturnVisit":
      return VisitIndicator.RequestReturnVisit;
    case "MemberOfAnotherChurch":
      return VisitIndicator.MemberOfAnotherChurch;
    default:
      return null;
  }
}
