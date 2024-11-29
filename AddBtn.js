import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { format, startOfWeek, addDays } from 'date-fns';
import { Calendar } from 'react-native-calendars';


export default function({ addPress }) {
  return(
    <TouchableOpacity
          style={styles.floatingButton}
          onPress={addPress}>
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: '#d7c4f9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 30,
    color: '#fff',
  },

  });