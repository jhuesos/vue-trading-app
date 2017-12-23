<template>
    <v-list>
      <v-list-tile to="/" exact>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/portfolio">
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Porfolio</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile to="/stocks">
        <v-list-tile-action>
          <v-icon>assessment</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Stocks</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
</template>
