import { CspPolicies } from "@main/csp";

CspPolicies["globalbadges-bot-production.up.railway.app"] = [...(CspPolicies["globalbadges-bot-production.up.railway.app"] ?? []), "connect-src", "img-src"];
CspPolicies["gb.obamabot.me"] = [...(CspPolicies["gb.obamabot.me"] ?? []), "img-src"];
