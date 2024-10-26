import { authorities } from "@/global";
import Auth from "@/modules/auth/store";

const hasAnyAuthority = (...requiredAuthorities) => {
    const authorities_state = Auth.state.authorities || [];

    // console.log('Authorities:', authorities_state);
    const requiredAuthoritiesValues = requiredAuthorities
        .map(auth => authorities[auth])
        .filter(Boolean);

    return requiredAuthoritiesValues.some(auth => authorities_state.includes(auth));
};

export default {
    hasAnyAuthority
};
