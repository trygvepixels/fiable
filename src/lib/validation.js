import mongoose from 'mongoose';

export function validateObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const re = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
  return re.test(phone);
}

export function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeString(str) {
  return typeof str === 'string' ? str.trim() : '';
}

export function validateLocationData(data) {
  const errors = [];

  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.push('Name is required');
  }

  if (!data.type || !['head-office', 'branch', 'meeting-space', 'project-office', 'service-center'].includes(data.type)) {
    errors.push('Valid location type is required');
  }

  if (!data.address) {
    errors.push('Address is required');
  } else {
    if (!data.address.street || !data.address.street.trim()) {
      errors.push('Street address is required');
    }
    if (!data.address.city || !data.address.city.trim()) {
      errors.push('City is required');
    }
    if (!data.address.state || !data.address.state.trim()) {
      errors.push('State is required');
    }
    if (!data.address.pincode || !data.address.pincode.trim()) {
      errors.push('PIN code is required');
    }
  }

  // Validate contact information if provided
  if (data.contact) {
    if (data.contact.phone && Array.isArray(data.contact.phone)) {
      data.contact.phone.forEach((phone, index) => {
        if (phone && !validatePhone(phone)) {
          errors.push(`Invalid phone number at index ${index}`);
        }
      });
    }

    if (data.contact.email && Array.isArray(data.contact.email)) {
      data.contact.email.forEach((email, index) => {
        if (email && !validateEmail(email)) {
          errors.push(`Invalid email at index ${index}`);
        }
      });
    }

    if (data.contact.whatsapp && !validatePhone(data.contact.whatsapp)) {
      errors.push('Invalid WhatsApp number');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
