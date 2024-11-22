import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useLoginService } from './API/loginService'; // Replace with actual service
import { UtilProvider, useUtilService } from './utilService'; // Replace with actual utility
import { environment } from './environment'; // Replace with your environment config

const SsoLandingPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState<string | null>(null);
    const [oktaToken, setOktaToken] = useState<string | null>(null);
    const [provider, setProvider] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    const [inValidPermissionUserError, setInValidPermissionUserError] = useState(false);
    const { setProfile } = useUtilService();
    const {
        getProfile,
        getLoggedInUserDetails,
        getSSOloginInfo
      } = useLoginService();


    const API_KEY = environment.API_KEY;
    const API_CIPHER = {
        iv: CryptoJS.enc.Utf8.parse('1234'), // Example IV
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setEmail(queryParams.get('email'));
        setOktaToken(queryParams.get('okta_token'));
        setProvider(queryParams.get('provider'));
        getSSOLoginInfoHandler();
    }, [location.search]);

    const getSSOLoginInfoHandler = async () => {
        try {
            const data = {
                email: email,
                okta_token: oktaToken,
                provider: provider,
            };

            const res = await getSSOloginInfo(data);
            window.localStorage.setItem('accessToken', res.access_token);
            window.localStorage.setItem('refreshToken', res.refresh_token);
            window.localStorage.setItem('accessTokenTime', new Date().toString());

            // Fetch user profile
            const profileRes = await getProfile();
            profileRes[0].licenseName = CryptoJS.AES.decrypt(
                profileRes[0].licenseName,
                API_KEY,
                API_CIPHER
            ).toString(CryptoJS.enc.Utf8);
            profileRes[0].licenseDesc = CryptoJS.AES.decrypt(
                profileRes[0].licenseDesc,
                API_KEY,
                API_CIPHER
            ).toString(CryptoJS.enc.Utf8);

            window.localStorage.setItem('profile', profileRes[0].licenseName);
            const dashboardPrefix = profileRes[0].licenseName.substring(0, 3);
            window.localStorage.setItem('activeDashboard', dashboardPrefix);

            
            setProfile(dashboardPrefix);

            // Fetch user roles and permissions
            const userDetails = await getLoggedInUserDetails();
            const { distinctRoles, distinctPermissions } = userDetails;

            window.localStorage.setItem('userRoles', JSON.stringify(distinctRoles));
            window.localStorage.setItem('userPermissions', JSON.stringify(distinctPermissions));

            // Navigate based on permissions
            handleNavigation(distinctRoles, distinctPermissions);
        } catch (error) {
            console.error(error);
            setIsError(true);
        }
    };

    const handleNavigation = (roles: string[], permissions: string[]) => {
        if (permissions.includes('Dashboard_Control')) {
            navigate('/dashboard');
        } else if (permissions.includes('Insight_Control')) {
            navigate('/caseManagement');
        } else if (permissions.includes('Insightconfiguration_Control')) {
            navigate('/insightConfigurations');
        } else if (permissions.includes('Entity_Control')) {
            navigate('/entity');
        } else if (permissions.includes('Pulse_Control')) {
            navigate('/cyberNetixPulse');
        } else if (roles.includes('ROLE_ADMIN') && permissions.includes('View_Profile')) {
            navigate('/rback');
        } else if (roles.includes('ROLE_ADMIN') && permissions.includes('View_Profile')) {
            navigate('/rback/userList');
        } else {
            setInValidPermissionUserError(true);
        }
    };

    return (
        <div className="sso-landing-page">
            {isError ? (
                <p>An error occurred while processing your request. Please try again later.</p>
            ) : inValidPermissionUserError ? (
                <p>User does not have valid permissions to access any modules.</p>
            ) : (
                <p>Loading SSO information...</p>
            )}
        </div>
    );
};

export default SsoLandingPage;
