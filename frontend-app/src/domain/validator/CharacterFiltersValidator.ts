import { Status, Gender } from "../entities";
import { CharacterFilters } from "../models/CharacterFilters";

export class CharacterFiltersValidator {
  private static validStatuses: Status[] = ["Alive", "Dead", "unknown"];
  private static validGenders: Gender[] = [
    "Female",
    "Male",
    "Genderless",
    "unknown",
  ];

  static isValidStatus(status?: Status): boolean {
    if (!status) return true;
    return this.validStatuses.includes(status);
  }

  static isValidGender(gender?: Gender): boolean {
    if (!gender) return true;
    return this.validGenders.includes(gender);
  }

  static isValidName(name?: string): boolean {
    return !!name && name.trim().length > 0;
  }

  static isValidType(type?: string): boolean {
    return !!type && type.trim().length > 0;
  }

  static validateAll(filters: CharacterFilters): boolean {
    return (
      this.isValidStatus(filters.status) &&
      this.isValidGender(filters.gender) &&
      this.isValidName(filters.name) &&
      this.isValidType(filters.type)
    );
  }
}
