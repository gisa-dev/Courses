import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Card, CustomView, Title} from '../../components';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Fullname"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
            <Text>{JSON.stringify(form, null, 3)}</Text>
          </Card>
          <View style={{height: 20}} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
