import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.squre}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  squre: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF666',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    maxWidth: '80%',
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 7,
  },
})