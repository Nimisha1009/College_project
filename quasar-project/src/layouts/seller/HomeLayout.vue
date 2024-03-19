<template>
    <q-layout>
        <q-card>
            <div>
                <q-btn  to="/seller/auth/login" label="Login"></q-btn>
                <q-btn label="signup"></q-btn>
            </div>
        </q-card>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </template>
  