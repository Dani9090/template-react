import React from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
//import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/EroorMessage/ErrorMessage';
const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(auth.singIn)}
      style={{ height: `100vh`, display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column` }}
    >
      <FormField label="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
      {/* {loginError && <span>{loginError}</span>} */}
    </form>
  );
};

// const Root = () => {
//   const [user, setUser] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       (async () => {
//         try {
//           const response = await axios.get('/me', {
//             headers: {
//               authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(response.data);
//         } catch (e) {
//           console.log(e);
//         }
//       })();
//     }
//   }, []);

//   const handleSingIn = async ({ login, password }) => {
//     try {
//       const response = await axios.post('/login', {
//         login,
//         password,
//       });
//       setUser(response.data);
//       localStorage.setItem('token', response.data.token);
//     } catch (e) {
//       setError('Please provide valid user data');
//     }
//   };

//   return (
//     <Router>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle />
//         {user ? <AuthenticatedApp /> : <UnAuthenticatedApp loginError={error} handleSingIn={handleSingIn} />}
//       </ThemeProvider>
//     </Router>
//   );
// };
const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
};
export default Root;
