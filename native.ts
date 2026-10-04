import { CspPolicies } from "@main/csp";

CspPolicies["raw.githubusercontent.com"] = [...(CspPolicies["raw.githubusercontent.com"] ?? []), "connect-src", "img-src"];
CspPolicies["gb.obamabot.me"] = [...(CspPolicies["gb.obamabot.me"] ?? []), "img-src"];
