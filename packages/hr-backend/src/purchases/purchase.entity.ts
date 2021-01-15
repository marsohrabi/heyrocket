import {
    Column,
    DataType,
    Model,
    Table,
} from "sequelize-typescript";

@Table({
    tableName: "purchases",
    paranoid: true,
    underscored: true
})
export class PurchaseEntity extends Model<PurchaseEntity> {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    })
    readonly id: number;

    @Column({ type: DataType.INTEGER })
    amount: number;

    @Column({type: DataType.DATE})
    created_at: Date

    @Column({type: DataType.DATE})
    updated_at: Date

    @Column({type: DataType.DATE})
    deleted_at: Date
}