package com.devglan.controller;

import com.devglan.config.JwtTokenUtil;
import com.devglan.config.TokenProvider;
import com.devglan.model.ApiResponse;
import com.devglan.model.AuthToken;
import com.devglan.model.LoginUser;
import com.devglan.model.Employee;
import com.devglan.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import static com.devglan.model.Constants.TOKEN_PREFIX;

@SuppressWarnings("unused")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private EmployeeService userService;

    // @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    // public ResponseEntity<?> register(@RequestBody LoginUser loginUser) throws AuthenticationException {

    //     // final Authentication authentication = authenticationManager.authenticate(
    //     //         new UsernamePasswordAuthenticationToken(
    //     //                 loginUser.getUsername(),
    //     //                 loginUser.getPassword()
    //     //         )
    //     // );
    //     // SecurityContextHolder.getContext().setAuthentication(authentication);
    //     // final String token = jwtTokenUtil.generateToken(authentication);
    //     // return ResponseEntity.ok(new AuthToken(token));}
    // }
    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ApiResponse<AuthToken> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));
        final Employee user = userService.findOne(loginUser.getUsername());
        final String token = jwtTokenUtil.generateToken(user);
        return new ApiResponse<>(200, "success",new AuthToken(token, user.getUsername(), user.getRole()));
    }

    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ApiResponse<Void> logout() throws AuthenticationException {
        return new ApiResponse<>(200, "success",null);
    }
}
     
    